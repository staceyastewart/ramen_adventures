class AddShopIdToUsershops < ActiveRecord::Migration[5.0]
  def change
    add_reference :usershops, :shop, foreign_key: true
  end
end
