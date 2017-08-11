class PostsController < ApplicationController
  include Response

  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @posts = Post.all
    q = params[:q]
    @posts_search    = Post.ransack(content_cont: q).result
    @shops_search = Shop.ransack(name_cont: q).result
    json_response(@posts)
  end

  def show
    @post = Post.find(params[:id])
    json_response(@post)
  end

  def create
    @post = Post.create!(post_params)
    @post.shop = Shop.find(params[:id])
    if @post.save
        json_response(@post, :created)
    else
        json_response({:errors => @post.errors.full_messages})
    end
  end

  def update
    @post = Post.update(post_params)
    head :no_content
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  private

  def post_params
    json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
    return json_params.require(:post).permit(:content, :date, :shops_id)
  end
end
