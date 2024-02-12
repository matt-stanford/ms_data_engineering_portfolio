from django.shortcuts import render
from django.http import JsonResponse

from .models import Project

def index(request):
    projects = Project.objects.all()
    return render(request, 'pages/index.html', {'projects': projects})


def get_project_details(request, project_id):
    project = Project.objects.get(id=project_id)
    data = {
        'title': project.title,
        'summary': project.summary,
        'technology': project.technology,
        'githubUrl': project.github_url,
        'imageMain': project.image_main.url,
        'image1': project.image_1.url if project.image_1 else '',
        'image2': project.image_2.url if project.image_2 else '',
        'image3': project.image_3.url if project.image_3 else '',
        'image4': project.image_4.url if project.image_4 else '',
        'image5': project.image_5.url if project.image_5 else ''
    }
    return JsonResponse(data)
