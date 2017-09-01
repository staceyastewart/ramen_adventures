class AddBestOfColumnToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :best_of, :boolean
  end
end
