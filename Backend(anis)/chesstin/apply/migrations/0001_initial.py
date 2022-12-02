# Generated by Django 4.1.3 on 2022-11-30 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='APPLYANT',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=50)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('rating', models.CharField(max_length=20)),
                ('place', models.CharField(choices=[('ESI', 'ESI'), ('ESTIN', 'ESTIN')], max_length=5)),
                ('motivation', models.TextField()),
                ('anythingTOadd', models.TextField(blank=True)),
            ],
        ),
    ]
