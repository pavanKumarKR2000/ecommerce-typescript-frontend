"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  addProduct,
  getProduct,
  updateProduct,
} from "@/lib/actions/product.actions";
import { MODE_INFO, PRODUCT_CATEGORIES } from "@/lib/constants";
import { useUploadThing } from "@/lib/uploadthing";
import { slugify } from "@/lib/utils";
import {
  createProductSchema,
  updateProductSchema,
} from "@/validators/product.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

interface ProductForm {
  mode: "add" | "update";
  id?: number;
  closeDialog: () => void;
}

const ProductForm = ({ closeDialog, mode, id }: ProductForm) => {
  const title = MODE_INFO[mode].title;
  const pendingTitle = MODE_INFO[mode].pendingTitle;

  const [imageFiles, setImageFiles] = useState<
    { id: number; img: File }[] | []
  >([]);
  const [preview, setPreview] = useState<{ id: number; img: string }[] | []>(
    [],
  );
  const [payload, setPayload] = useState<any>(null);
  const [imageUrls, setImageUrls] = useState<string[] | []>([]);
  const [isPending, startTransition] = useTransition();
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      mode === "add" ? createProductSchema : updateProductSchema,
    ),
    defaultValues:
      mode === "add"
        ? {
            isFeatured: false,
            stock: 10,
          }
        : async () => {
            setIsLoadingProducts(true);
            const { data } = await getProduct(id as number);
            setIsLoadingProducts(false);
            return {
              name: data.name as string,
              description: data.description as string,
              price: data.price as number,
              stock: data.stock as number,
              isFeatured: data.isFeatured as boolean,
              brand: data.brand as string,
              category: data.category as string,
            };
          },
  });

  useEffect(() => {
    if (imageUrls.length && payload) {
      try {
        startTransition(async () => {
          const { success, message } = await addProduct({
            ...payload,
            images: imageUrls,
          });

          if (success) {
            toast.success(message);
            setPayload(null);
            setImageUrls([]);
            setPreview([]);
            closeDialog();
          } else {
            toast.error(message);
          }
        });
      } catch (err) {
        toast.error("Something went wrong while adding product");
      }
    }
  }, [imageUrls, payload]);

  const { startUpload } = useUploadThing("productImage", {
    onClientUploadComplete: (res) => {
      if (res) {
        const urls = res.map((file) => file.url);
        setImageUrls(() => urls);
      }
    },
    onUploadError: (err) => {
      console.log("err", err);
      alert("error occurred while uploading");
    },
    onUploadBegin: () => {
      //
    },
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length) {
      setImageFiles(
        Array.from(files).map((item, index) => ({
          id: index,
          img: item,
        })),
      );

      let previewImages = Array.from(files).map((item, index) => ({
        id: index,
        img: URL.createObjectURL(item),
      }));

      setPreview(previewImages);
    }
  };

  const onSubmitForm = async (
    product: z.infer<typeof createProductSchema | typeof updateProductSchema>,
  ) => {
    if (mode === "add") {
      if (imageFiles?.length) {
        try {
          startTransition(async () => {
            await startUpload(imageFiles.map((item) => item.img));

            const payload = {
              ...product,
              slug: slugify(product.name),
            };

            setPayload(payload);
          });
        } catch (err) {
          toast.error("Something went wrong while uploading images");
        }
      }
    } else {
      try {
        startTransition(async () => {
          const payload = { ...product, slug: slugify(product.name) };

          const { success, message } = await updateProduct(
            id as number,
            payload,
          );

          if (success) {
            toast.success(message);
            closeDialog();
          } else {
            toast.error(message);
          }
        });
      } catch (err) {
        toast.error("Something went wrong while updating product");
      }
    }
  };

  const onDeleteImage = (id: number) => {
    setPreview(preview.filter((item) => item.id !== id));
    setImageFiles(imageFiles.filter((item) => item.id !== id));
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4 relative"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {/** product name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          {...register("name")}
          placeholder="Enter name"
          type="text"
          id="name"
        />
        <p className="text-red-500">{errors.name && errors.name.message}</p>
      </div>
      {/** product brand */}
      <div className="space-y-2">
        <Label htmlFor="brand">Brand</Label>
        <Input
          {...register("brand")}
          placeholder="Enter brand"
          type="text"
          id="brand"
        />
        <p className="text-red-500">{errors.brand && errors.brand.message}</p>
      </div>
      {/** product description */}
      <div className="space-y-2 col-span-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          {...register("description")}
          placeholder="Enter description"
          id="description"
        />
        <p className="text-red-500">
          {errors.description && errors.description.message}
        </p>
      </div>
      {/** product price */}
      <div className="space-y-2">
        <Label htmlFor="price">Price</Label>
        <Input
          {...register("price")}
          placeholder="Enter price"
          type="number"
          min={0}
          id="price"
        />
        <p className="text-red-500">{errors.price && errors.price.message}</p>
      </div>
      {/** product stock */}
      <div className="space-y-2">
        <Label htmlFor="stock">Stock</Label>
        <Input
          {...register("stock")}
          placeholder="Enter stock"
          type="number"
          min={0}
          id="stock"
        />
        <p className="text-red-500">{errors.stock && errors.stock.message}</p>
      </div>
      {/** product category */}
      <div className="space-y-2 col-span-2">
        <Label htmlFor="category">Product category</Label>
        <Controller
          name="category"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full" id="category">
                <SelectValue placeholder="Select product category" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_CATEGORIES.map((item) => (
                  <SelectItem value={item.name} key={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <p className="text-red-500">
          {errors.category && errors.category.message}
        </p>
      </div>
      {/** featured */}
      <div className="flex items-center gap-2">
        <Controller
          name="isFeatured"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="is-featured"
              className="h-5 w-5"
            />
          )}
        />
        <Label htmlFor="is-featured">Is featured</Label>
        <p className="text-red-500">
          {errors.isFeatured && errors.isFeatured.message}
        </p>
      </div>

      {/** product images */}
      {mode === "add" && (
        <div className="space-y-2 col-span-2">
          <Label htmlFor="images">Images</Label>
          <Input
            placeholder="Select image"
            type="file"
            id="images"
            className="w-full"
            accept="image/*"
            onChange={onFileChange}
            multiple
          />
          {preview.length > 0 && (
            <ScrollArea className="w-full  h-[150px]">
              <div className="w-full  flex items-center gap-4 flex-wrap">
                {preview.map((item) => (
                  <div key={item.id} className="relative rounded-md">
                    <Image
                      src={item.img}
                      alt="img"
                      height={200}
                      width={200}
                      className="size-[150px]! rounded-md"
                    />
                    <Button
                      variant="destructive"
                      className="absolute top-0 right-0"
                      onClick={() => onDeleteImage(item.id)}
                    >
                      <IconX className="text-black" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      )}

      <Button
        type="submit"
        className="col-span-2 mt-6"
        isLoading={isPending}
        disabled={isPending}
      >
        {isPending ? pendingTitle : title}
      </Button>
      {isLoadingProducts && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-dark/50">
          <IconLoader className="size-6 animate-spin" />
        </div>
      )}
    </form>
  );
};

export default ProductForm;
