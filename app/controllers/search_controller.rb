class SearchController < ApiController
  include Response

  def index
    q = params[:q]
    @posts_search    = Post.ransack(content_cont: q).result
    @shops_search = Shop.ransack(name_cont: q).result
    render json: {posts: @posts_search, shops: @shops_search}, status: :ok
  end


end
