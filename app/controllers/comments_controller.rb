class CommentsController < ApplicationController
    include Response

    before_action :require_login, only: [:create, :update, :destroy]

    def show
        @comment = Comment.find(params[:id])
        json_response(@comment)
    end

    def create
        @comment = Comment.create!(comment_params)
        @comment.post = Post.find(params[:id])
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
        return json_params.require(:comment).permit(:content, :posts_id, :users_id)
    end
end
