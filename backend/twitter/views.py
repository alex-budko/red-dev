from .models import Tweet, UserAccount
from .serializers import UserAccountSerializer, TweetSerializer
from rest_framework import generics
from rest_framework.permissions import SAFE_METHODS, BasePermission

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS

class UserRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer
    lookup_field = 'username'

class UserListCreate(generics.ListCreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer


class TweetList(generics.ListAPIView):
    queryset = Tweet.objects.all().order_by('-id')
    serializer_class = TweetSerializer


class TweetCreate(generics.CreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class TweetRetrieveDestroy(generics.RetrieveDestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    lookup_field = 'id'

class ModdedTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Custom claims
        token['username'] = user.username

        return token


class ModdedTokenObtainPairView(TokenObtainPairView):
    serializer_class = ModdedTokenObtainPairSerializer
