class SearchController < ApplicationController

  def index
    q = params[:q]
    @posts_search    = Post.ransack(content_cont: q).result
    @shops_search = Shop.ransack(name_cont: q).result
  end

  
end
