
class PostsController < ApiController
  include Response

  before_action :require_login, only: [:create, :update, :destroy]
  after_action :verify_authorized, only: [:create, :update, :destroy]

  def index
    @posts = Post.all
    json_response(@posts)
  end

  def show
    @post = Post.find(params[:id])
    json_response(@post)
  end

  def create
    @post = Post.new(post_params)
    authorize @post
    #@post.shop = Shop.find(params[:id])
    @post.save!
    if @post.save
       json_response(@post, :created)
    else
       json_response({:errors => @post.errors.full_messages})
    end
  end

    def update
      @post = Post.find(params[:id])
      authorize @post
      @post.update_attributes(post_params)

      if @post.update_attributes(post_params)
         json_response(@post)
      else
         json_response( {:errors => @post.errors.full_messages })
      end
    end

    def destroy
      @post = Post.find(params[:id])
      authorize @post
      @post.destroy
    end

    private

    def post_params
      json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
      return json_params.require(:post).permit(:content, :date, :shops_id, :photos, :best_of)
    end

end
