/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from 'express';
import catchAsync from '../../utills/catchAsync';
import { productService } from './products.service';
import sendResponse from '../../utills/sendResponse';
import httpStatus from 'http-status';

const createProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await productService.createProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: 'Product created successfully',
    success: true,
    data: result,
  });
});
// getAllProduct
const getAllProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await productService.getAllProductIntoDB();
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Products retrieved false',
      data: [],
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});
// getSingleProduct
const getSingleProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await productService.getSingleProductIntoDB(id);

  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Products retrieved false',
      data: [],
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A Products retrieved successfully',
    data: result,
  });
});
// updateManyProduct
const updateManyProduct: RequestHandler = catchAsync(async (req, res, next) => {
  
  const result = await productService.updateManyProductIntoDB( req.body);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Products retrieved false',
      data: [],
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products updated successfully',
    data: result,
  });
});
// updateSingleProduct
const updateSingleProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await productService.updateSingleProductIntoDB(id, req.body);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Products retrieved false',
      data: [],
    });
    return;
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});
// deleteSingleProduct
const deleteSingleProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await productService.deleteAProduct(id);
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Products retrieved false',
      data: [],
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Deleted successfully',
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateManyProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
