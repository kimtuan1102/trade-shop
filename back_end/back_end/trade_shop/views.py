from rest_framework import viewsets
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Categories, Product
from .serializers import ProductSerializer, CategoriesSerializer


class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer
    authentication_classes = (JWTAuthentication,)


class ProductionViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_classes = (JWTAuthentication,)
