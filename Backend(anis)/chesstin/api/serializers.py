from rest_framework import serializers
from apply.models import APPLYANT


class APPLYSerializer(serializers.ModelSerializer):
    class Meta:
        model = APPLYANT
        fields=('email','first_name','last_name','rating','place','motivation','anything_to_add')