from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=255)
    summary = models.TextField()
    technology = models.CharField(max_length=255)
    url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    image_main = models.ImageField(upload_to='images/')
    image_1 = models.ImageField(upload_to='images/', blank=True)
    image_2 = models.ImageField(upload_to='images/', blank=True)
    image_3 = models.ImageField(upload_to='images/', blank=True)
    image_4 = models.ImageField(upload_to='images/', blank=True)
    image_5 = models.ImageField(upload_to='images/', blank=True)
    upload_date = models.DateTimeField(auto_now_add=True)

    @property
    def short_summary(self):
        return f'{self.summary[:100]}...'
    
    @property
    def technology_tags_list(self):
        return self.technology.split(';')

    def __str__(self):
        return self.title

