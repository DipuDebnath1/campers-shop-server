/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectId } from 'mongodb';
import { TProduct } from './products.interface';
import { productCollection } from './products.model';

// post a car
const createProductIntoDB = async (payload: TProduct) => {
  const result = await productCollection.create(payload);
  return result;
};

// get all Product
const getAllProductIntoDB = async () => {
  const result = await productCollection.find();
  if (!result) return;

  return result;
};

// get a Product
const getSingleProductIntoDB = async (id: string) => {
  const result = await productCollection.findById(id);
  if (!result) return;

  return result;
};

// update a Product
const updateSingleProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await productCollection.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!result) return;

  return result;
};


// update some Product
const updateManyProductIntoDB = async (products: Partial<TProduct>[]) => {
  
  try {
    // Construct bulk operations
    const bulkOperations = products.map(product => ({
      updateOne: {
        filter: { _id: new ObjectId(product._id) },
        update: {
          $set: {
            // update 
            ...(product.price !== undefined && { price: product.price }),
            ...(product.stockQuantity !== undefined && { stockQuantity:product.stockQuantity - product.quantity! }),
          },
        },
        upsert: false, // Change to true if you want to insert documents that don't exist
      },
    }));

    // Execute bulk write operation
    const result = await productCollection.bulkWrite(bulkOperations);

    return result ;
  } catch (error) {
    return ;
  }
};

//delete a Product
const deleteAProduct = async (id: string) => {
  const result = await productCollection.findByIdAndDelete( id );
  if (!result) return;

  return result;
};

export const productService = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  updateSingleProductIntoDB,
  updateManyProductIntoDB,
  deleteAProduct,
};
