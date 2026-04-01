from django.shortcuts import render

from django.http import JsonResponse
from .models import Product, Category

#барлық тауарлар тізімім
def product_list(request):
    products = Product.objects.all()

    products_json = []
    for p in products:
        products_json.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "image": p.image
        })
    return JsonResponse(products_json, safe=False)

#бір нақты тауар (ID бойынша)
def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
        return JsonResponse({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "image": p.image
        })
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)

#барлық категориялар тізімім
def category_list(request):
    categories = Category.objects.all()
    categories_json = []
    for c in categories:
        categories_json.append({
            "id": c.id,
            "name": c.name
        })
    return JsonResponse(categories_json, safe=False)

#бір нақты категория
def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({"id": c.id, "name": c.name})
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)

#осы категорияға жататын тауарлар
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category=category)
        products_json = []
        for p in products:
            products_json.append({
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "description": p.description,
                "count": p.count,
                "is_active": p.is_active,
                "image": p.image
            })
        return JsonResponse(products_json, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)