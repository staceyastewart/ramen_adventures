class ShopsController < ApplicationController
  def new
    shop = Shop.new
  end

  def create
    shop = Shop.create!(shop_params)
  end

  private

  def shop_params
    json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
    return json_params.require(:shop).permit(:name, :address, :recommended)
  end
end
