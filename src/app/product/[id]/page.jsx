import React from "react";
import { products } from "@/app/lib/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ShoppingCart } from "lucide-react";

const ProductPage = ({ params }) => {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-96">
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">Product not found.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-lg p-8 aspect-square flex items-center justify-center">
            <img
              src="/image/blog-bg.jpg"
              alt={product.title}
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col space-y-6 pt-20">
          <div>
            <Badge className="mb-3">{product.category || "New Arrival"}</Badge>
            <h1 className="text-3xl font-extrabold mb-3 text-gray-800">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-800">
              {product.detailedDescription.priceRange}
            </span>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1 hover:bg-gray-800 hover:text-white"
              size="lg"
            >
              Share this Product <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="flex justify-start border-b mb-6">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="usage">Usage Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  Product Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {product.detailedDescription.overview}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(
                    product.detailedDescription.technicalSpecifications
                  ).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b py-2"
                    >
                      <span className="font-medium text-gray-600">{key}</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Usage Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {product.detailedDescription.usage}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default ProductPage;
