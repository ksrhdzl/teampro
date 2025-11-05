// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import "./App.css";

// // function App() {
// //   const { register, handleSubmit } = useForm();

// //   const onSubmit = async (data) => {
// //     const formData = new FormData();
// //     formData.append("picture", data.picture[0]);

// //     const res = await fetch("http://localhost:4000/picture", {
// //       method: "POST",
// //       body: formData,
// //     }).then((res) => res.json());
// //     alert(JSON.stringify(res));
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <input ref={register} type="file" name="picture" />
// //       <button>Submit</button>
// //     </form>
// //   );
// // }

// // export default App;

// // const onSubmit = async (data) => {
// //   try {
// //     // Get the presigned URL from your backend or directly from AWS SDK
// //     const presignedUrl = "YOUR_PRESIGNED_URL_HERE";

// //     // Upload the file to AWS using the presigned URL
// //     const formData = new FormData();
// //     formData.append("file", data.file[0]); // Assuming single file upload

// //     const uploadResponse = await fetch(presignedUrl, {
// //       method: "PUT",
// //       body: formData,
// //       headers: {
// //         "Content-Type": data.file[0].type,
// //       },
// //     });

// //     if (!uploadResponse.ok) {
// //       throw new Error("Failed to upload file");
// //     }

// //     console.log("File uploaded successfully");
// //   } catch (error) {
// //     console.error("Error uploading file:", error);
// //   }
// // };

// // <Field label="Picture" error={errors.picture}>
// //           <Controller
// //             control={control}
// //             name={"picture"}
// //             rules={{ required: "Recipe picture is required" }}
// //             render={({ field: { value, onChange, ...field } }) => {
// //               return (
// //                 <Input
// //                   {...field}
// //                   value={value?.fileName}
// //                   onChange={(event) => {
// //                     onChange(event.target.files[0]);
// //                   }}
// //                   type="file"
// //                   id="picture"
// //                 />
// //               );
// //             }}
// //           />
// //         </Field>

// // const submitForm = (data) => {
// //     const formData = new FormData();

// //     formData.append("files", data.picture[0]);
// //     data = { ...data, picture: data.picture[0].name };
// //     formData.append("recipe", JSON.stringify(data));

// //     return fetch("/api/recipes/create", {
// //       method: "POST",
// //       body: formData,
// //     }).then((response) => {
// //       if (response.ok) {
// //         // Handle successful upload
// //       } else {
// //         // Handle error
// //       }
// //     });
// //   };

// // const productFormSchema = z.object({
// //     name: z.string().min(1, { message: "Name is required" }),
// //    image: z
// //       .union([
// //         z.instanceof(File, { message: "Image is required" }),
// //         z.string().optional(), // Allow the existing image URL for editing mode
// //       ])
// //       .refine((value) => value instanceof File || typeof value === "string", {
// //         message: "Image is required",
// //       }),
// //   });

// // -------------

// // const { data, isFetching } = useQuery(
// //     import React from "react";
// //     import { z } from "zod";
// //     import { useForm, Controller } from "react-hook-form";
// //     import { zodResolver } from "@hookform/resolvers/zod";
// //     import { useEffect, useState } from "react";

// //     const productFormSchema = z.object({
// //       name: z.string().min(1, { message: "Name is required" }),
// //      image: z
// //         .union([
// //           z.instanceof(File, { message: "Image is required" }),
// //           z.string().optional(), // Allow the existing image URL for editing mode
// //         ])
// //         .refine((value) => value instanceof File || typeof value === "string", {
// //           message: "Image is required",
// //         }),
// //     });
// //     export type ProductFormValues = z.infer<typeof productFormSchema>;
// //     interface ProductForm2Props { product?: Product; }

// //     export const ProductForm1 = ({ product }: ProductForm2Props) => {
// //       const isAddMode = !product;
// //       const [imagePreview, setImagePreview] = useState<string | null>(
// //         product?.image ?? null
// //       );

// //       const {
// //         register,
// //         handleSubmit,
// //         control,
// //         watch,
// //         reset,
// //         formState: { errors, isSubmitting, isDirty },
// //       } = useForm<ProductFormValues>({
// //         resolver: zodResolver(productFormSchema),
// //         defaultValues: {
// //           name: product?.name ?? "",
// //           image: product?.image ?? "", // Use the existing image URL for editing mode
// //         },
// //       });

// //       const image = watch("image");
// //       useEffect(() => {
// //         if (image instanceof File) {
// //           const imageUrl = URL.createObjectURL(image);
// //           setImagePreview(imageUrl);
// //      return () => URL.revokeObjectURL(imageUrl);
// //         }
// //         if (typeof image === "string") {
// //           setImagePreview(image);
// //         }
// //       }, [image]);

// //       const onSubmitHandler = async (data: ProductFormValues) => {
// //         console.log(data);

// //         let imageUrl: string | undefined;
// //         if (data.image instanceof File) {
// //           // build FormData for uploading image
// //           const formData = new FormData();
// //           formData.append("file", data.image);

// //           // mock upload image to server to get image url
// //           imageUrl = await new Promise<string>((resolve) => {
// //             setTimeout(() => {
// //               resolve("https://via.placeholder.com/150");
// //             }, 1000);
// //           });
// //         } else {
// //           imageUrl = data.image; // Use the existing image URL for updating mode
// //         }
// //         if (isAddMode) {
// //           // create product
// //           console.log({ ...data, image: imageUrl! });
// //         } else {
// //           // update product
// //           console.log({ id: product!.id, ...data, image: imageUrl });
// //         }
// //         reset();
// //       };
// //       return (
// //         <form onSubmit={handleSubmit(onSubmitHandler)}>
// //           <input {...register("name")} />
// //         {errors.name && <span>{errors.name.message}</span>}
// //           <Controller
// //             name="image"
// //             control={control}
// //             render={({ field: { ref, name, onBlur, onChange } }) => (
// //               <input
// //                 type="file"
// //                 ref={ref}
// //                 name={name}
// //                 onBlur={onBlur}
// //                 onChange={(e) => {
// //                   const file = e.target.files?.[0];
// //                   onChange(file ? file : imagePreview); // Keep the existing image in edit mode
// //                   setImagePreview(
// //                     file ? URL.createObjectURL(file) : product?.image ?? null
// //                   );
// //                 }}
// //               />
// //             )}
// //           />
// //           {imagePreview && <img src={imagePreview} alt="preview" />}
// //           {errors.image && <span>{errors.image.message}</span>}

// //           <button type="submit" disabled={(!isAddMode && !isDirty) || isSubmitting}>
// //             {isSubmitting ? "Submitting..." : "Submit"}
// //           </button>
// //         </form>
// //       );
// //     };

// // --------*-*-*/-*/*-*---/*-*-*-/*-/*-/-*/*-/-*/*-/*-/*--*/*-/-*-/-*/*-/*-/-*/-*/*-/*-/*-/*-/*-/
// const getFileFromUrl = async (url: string) => {
//     const res = await fetch(url);
//     const blob = await res.blob();
//     return new File([blob], 'image', { type: blob.type });
//   };

//   const productForm1Schema = z.object({
//     name: z.string().min(1, { message: 'Name is required' }),
//     image: z
//       .custom<File>((v) => v instanceof File, {
//         message: 'Image is required',
//       })
//   });

//   export type ProductForm1Values = z.infer<typeof productForm1Schema>;

//   interface ProductForm1Props {
//     product?: Product;
//   }

//   export const ProductForm1 = ({ product }: ProductForm1Props) => {
//     const isAddMode = !product;

//     const {
//       register,
//       handleSubmit,
//       control,
//       watch,
//       reset,
//       formState: { errors, isSubmitting, isDirty },
//     } = useForm<ProductForm1Values>({
//       resolver: zodResolver(productForm1Schema),
//       defaultValues: product
//         ? async () => ({
//             name: product.name,
//             image: await getFileFromUrl(product.image),
//           })
//         : {
//             name: '',
//             image: undefined,
//           },
//     });

//     const image = watch('image');
//     const imagePreview = image ? URL.createObjectURL(image) : null;

//     // revoke object URL to avoid memory leaks
//     useEffect(() => {
//       return () => {
//         if (imagePreview) URL.revokeObjectURL(imagePreview);
//       };
//     }, [imagePreview]);

//     const onSubmitHandler = async (data: ProductForm1Values) => {
//       console.log(data);

//       // build FormData for uploading image
//       const formData = new FormData();
//       formData.append('file', data.image);

//       // mock upload image to server to get image url
//       const imageUrl = await new Promise<string>((resolve) => {
//         setTimeout(() => {
//           resolve('https://via.placeholder.com/150');
//         }, 1000);
//       });

//       if (isAddMode) {
//         // create product
//         console.log({ ...data, image: imageUrl });
//       } else {
//         // update product
//         console.log({ id: product!.id, ...data, image: imageUrl });
//       }

//       reset();
//     };

//     return (
//       <form onSubmit={handleSubmit(onSubmitHandler)}>
//         <input {...register('name')} />
//         {errors.name && <span>{errors.name.message}</span>}

//         <Controller
//           name="image"
//           control={control}
//           render={({ field: { ref, name, onBlur, onChange } }) => (
//             <input
//               type="file"
//               ref={ref}
//               name={name}
//               onBlur={onBlur}
//               onChange={(e) => onChange(e.target.files?.[0])}
//             />
//           )}
//         />
//         {imagePreview && <img src={imagePreview} alt="preview" />}
//         {errors.image && <span>{errors.image.message}</span>}

//         <button type="submit" disabled={(!isAddMode && !isDirty) || isSubmitting}>
//           {isSubmitting ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//     );
//   };
//   OR

//   Here is the second option when I created two schemas for creating and updating products and in the update schema image is optional:

//   const createProductSchema = z.object({
//     name: z.string().min(1, { message: 'Name is required' }),
//     image: z
//       .custom<File>((v) => v instanceof File, {
//         message: 'Image is required',
//       })
//   });

//   const updateProductSchema = createProductSchema.extend({
//     image: createProductSchema.shape.image.optional(),
//   });

//   export type ProductForm2Values =
//     | z.infer<typeof createProductSchema>
//     | z.infer<typeof updateProductSchema>;

//   interface ProductForm2Props {
//     product?: Product;
//   }

//   export const ProductForm2 = ({ product }: ProductForm2Props) => {
//     const [imagePreview, setImagePreview] = useState<string | null>(
//       product ? product.image : null,
//     );

//     const isAddMode = !product;

//     const {
//       register,
//       handleSubmit,
//       control,
//       reset,
//       formState: { errors, isSubmitting, isDirty },
//     } = useForm<ProductForm2Values>({
//       resolver: zodResolver(
//         isAddMode ? createProductSchema : updateProductSchema,
//       ),
//       defaultValues: {
//         name: product?.name ?? '',
//         image: undefined,
//       },
//     });

//     // revoke object URL to avoid memory leaks
//     useEffect(() => {
//       return () => {
//         if (imagePreview) URL.revokeObjectURL(imagePreview);
//       };
//     }, [imagePreview]);

//     const onSubmitHandler = async (data: ProductForm2Values) => {
//       console.log(data);

//       let imageUrl: string | undefined;
//       if (data.image) {
//         // build FormData for uploading image
//         const formData = new FormData();
//         formData.append('file', data.image);

//         // mock upload image to server to get image url
//         imageUrl = await new Promise<string>((resolve) => {
//           setTimeout(() => {
//             resolve('https://via.placeholder.com/150');
//           }, 1000);
//         });
//       }

//       if (isAddMode) {
//         // create product
//         console.log({ ...data, image: imageUrl! });
//       } else {
//         // update product
//         console.log({ id: product!.id, ...data, image: imageUrl });
//       }

//       reset();
//       setImagePreview(product?.image ?? null);
//     };

//     return (
//       <form onSubmit={handleSubmit(onSubmitHandler)}>
//         <input {...register('name')} />
//         {errors.name && <span>{errors.name.message}</span>}

//         <Controller
//           name="image"
//           control={control}
//           render={({ field: { ref, name, onBlur, onChange } }) => (
//             <input
//               type="file"
//               ref={ref}
//               name={name}
//               onBlur={onBlur}
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 onChange(e.target.files?.[0]);
//                 setImagePreview(file ? URL.createObjectURL(file) : null);
//               }}
//             />
//           )}
//         />
//         {imagePreview && <img src={imagePreview} alt="preview" />}
//         {errors.image && <span>{errors.image.message}</span>}

//         <button type="submit" disabled={(!isAddMode && !isDirty) || isSubmitting}>
//           {isSubmitting ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//     );
//   };

//   const App = () => {
//     const { handleSubmit, register } = useForm();

//     const { onChange, ...avatarField  } = register('avatar');

//     const onUploadAvatar = async (event) => {
//        // Call API to BE to generate a pre-signed url to upload file object
//        const response = await fetch('/generate-upload-url');
//        const { presignedUploadUrl } = await response.json();
//         // Use the pre-signed upload url to upload the image
//        const imageResponse = await fetch(presignedUploadUrl, { body: event.target.files[0] });
//        // Depends on configuration of AWS S3, response can include an url that points to uploaded image
//       const { url } = await imageResponse.json();
//       // Trigger onChange callback of react-hook-form to set uploaded image url string to form
//       onChange(url);
//     }

//     const onSubmit = (formValues) => {
//        // avatar field inside form values is now an static url
//     }

//     return <form onSubmit={handleSubmit(onSubmit)}>
//      <input {...register('name')} />
//      <input type="file"  {...avatarField} onChange={onUploadAvatar} />
//  </form>
//  }
