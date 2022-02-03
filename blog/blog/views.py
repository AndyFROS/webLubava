from turtle import title
from django.shortcuts import render
# Create your views here.
# blog/views.py
from django.views.generic import ListView, DetailView 
from .models import Post

def index(request):
    bdc = Post.objects.all()
    return render(request, "post_detail.html", {"bdc": bdc})

class BlogListView(ListView):
    model = Post
    template_name = 'home.html'
    # context = 'object_list'

class BlogDetailView(DetailView):
    model = Post
    template_name = 'post_detail.html'

    extra_context = {'latest': Post.objects.all()}