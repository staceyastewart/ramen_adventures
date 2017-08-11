class AddShopToPosts < ActiveRecord::Migration[5.0]
  def change
    add_reference :posts, :shop, foreign_key: true
  end
end
