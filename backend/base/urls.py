from django.urls import path, re_path
from django.views.generic import RedirectView

from . import views

urlpatterns = [
    path("", views.getRoutes, name="get_routes"),
    re_path(r"products$", views.getProducts, name="get_products"),
    re_path(r"products/$", views.getProducts, name="get_products_slashed"),
    re_path(r"products/(?P<pk>\w+)$", views.getProduct, name="get_product"),
    re_path(r"products/(?P<pk>\w+)/$", views.getProduct, name="get_product_slashed"),
]
