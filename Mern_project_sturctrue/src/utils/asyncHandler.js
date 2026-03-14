const asyncHandler = (requestHandle) => {
(req, res,next) => {
    Promise.resolve(requestHandle(req, res, next)).catch(next)
}
}


export { asyncHandler}

//  try catch 

// const asyncHandler = (fn) => async(req, res, next) => { 
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error,status || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }