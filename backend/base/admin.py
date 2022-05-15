from django.contrib import admin
from embed_video.admin import AdminVideoMixin

from .models import Order, OrderItem, Product, Review, ShippingAddress


# Register your models here.
class AdminVideo(AdminVideoMixin, admin.ModelAdmin):
    pass


admin.site.register(Product, AdminVideo)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
