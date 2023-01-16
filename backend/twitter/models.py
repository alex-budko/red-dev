from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.contrib.humanize.templatetags import humanize

class UserAccountManager(BaseUserManager):
    def create(self, username, password=None):

        user = self.model(
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, username, password=None):

        user = self.model(
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, password=None):
        user = self.create_user(
            password=password,
            username=username,
        )

        user.is_admin = True
        user.save(using=self._db)

        return user

class UserAccount(AbstractBaseUser):

    username = models.CharField(
        max_length=265, primary_key=True, unique=True, blank=False)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['username']

    def has_perm(self):
        "Does the user have a specific permission?"
        return True

    def has_module_perms(self):
        "Does the user have permissions to view the app `app_label`?"
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin

    def get_username(self):
        return self.username

    def __str__(self):
        return self.email


class Tweet(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, auto_created = True, blank=False)
    text = models.CharField(max_length=280)

    def created_at(self):
        return humanize.naturaltime(self.created)
