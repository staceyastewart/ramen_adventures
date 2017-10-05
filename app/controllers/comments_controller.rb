class CommentsController < ApiController
    include Pundit
    before_action :require_login, only: [:create, :update, :destroy]
    after_action :verify_authorized, only: [:update]


    def show
        @comment = Comment.find(params[:id])
        json_response(@comment)
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.post = Post.find(params[:post_id])
        @comment.user_id = current_user.id
        if @comment.save!
            json_response(@comment, :created)
        else
            json_response({:errors => @comment.errors.full_messages})
        end
    end

    def update
        @comment = Comment.find(params[:id])
        authorize @comment
        @comment.update(comment_params)
        json_response(@comment)
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
end
