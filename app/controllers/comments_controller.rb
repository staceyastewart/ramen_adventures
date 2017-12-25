class CommentsController < ApiController
    include Response

    before_action :set_post
    #before_action :require_login, only: [:create, :update, :destroy]

    # def index
    #     @comment = Comment.all
    #     json_response(@comment)
    # end

    def index
        comments = @post.comments
        render json: { comments: comments }
        #loop through comments and find first and last name by user_id
        #User.find....etc
    end

    def show
        @comment = Comment.find(params[:id])
        json_response(@comment)
    end

    def create
        @comment = Comment.create!(comment_params)
        @comment.post = Post.find(params[:post_id])
        if @comment.save
            json_response(@comment, :created)
        else
            json_response({:errors => @comment.errors.full_messages})
        end
    end

    def update
        @comment = Comment.update(comment_params)
        head :no_content
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
    end

    private

    def comment_params
        json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
        return json_params.require(:comment).permit(:content, :post_id, :user_id)
    end
    
    def set_post
        @post = Post.find(params[:post_id])
    end

end
