from django.urls import path

from . import views

urlpatterns = [
    path('',views.getRoutes,name='get_routes'),
    path('products/',views.getProducts,name='get_products'),
    path('products/<str:pk>/',views.getProduct,name='get_product'),
]
