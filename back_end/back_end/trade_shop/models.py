from django.db import models

META_TRADER = {
    ("Meta Trader 4", "Meta Trader 4"),
    ("Meta Trader 5", "Meta Trader 5")
}


class Categories(models.Model):
    name = models.CharField(max_length=255, blank=False)
    mt_version = models.CharField(choices=META_TRADER, max_length=100, default='meta_trader_4')
    description = models.CharField(max_length=255, blank=True)

    class Meta:
        db_table = 'categories'


class Production(models.Model):
    name = models.CharField(max_length=255, blank=False)
    description = models.CharField(max_length=2000, blank=False)
    price = models.FloatField(blank=False)
    video = models.CharField(max_length=255, blank=True)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)

    class Meta:
        db_table = 'production'
