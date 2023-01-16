from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Tweet
User = get_user_model()


class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class TweetSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        slug_field="username", many=False,
        queryset=User.objects.all(),
    )

    class Meta:
        model = Tweet
        fields = "__all__"
