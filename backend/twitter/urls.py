from django.urls import path
from .views import MessageCreate, MessageRetrieveDestroy, MessageList, StockCreate, StockRetrieveUpdateDestroy, UserListCreate, UserRetrieveUpdateDestroy, StockList, contact_message, add_stocks, update_stock_data

urlpatterns = [
    path('users/', UserListCreate.as_view(), name='user-list-create'),
    path('users/<slug:username>/', UserRetrieveUpdateDestroy.as_view(), name='user-rud'),
    path('message/', MessageCreate.as_view(), name='message-create'),
    path('message/<slug:id>/', MessageRetrieveDestroy.as_view(), name='message-create'),
    path('messages/', MessageList.as_view(), name='message-list'),
]