from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoriesViewSet, ProductionViewSet

router = DefaultRouter()
router.register(r'categories', CategoriesViewSet)
router.register(r'production', ProductionViewSet)
urlpatterns = [
    path('api/', include(router.urls))
]
