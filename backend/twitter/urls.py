from django.urls import path
from .views import TweetCreate, TweetRetrieveDestroy, TweetList, UserListCreate, UserRetrieveUpdateDestroy

urlpatterns = [
    path('users/', UserListCreate.as_view(), name='user-list-create'),
    path('users/<slug:username>/', UserRetrieveUpdateDestroy.as_view(), name='user-rud'),
    path('tweet/', TweetCreate.as_view(), name='tweet-create'),
    path('tweet/<slug:id>/', TweetRetrieveDestroy.as_view(), name='tweet-create'),
    path('tweets/', TweetList.as_view(), name='tweet-list'),
]