class RemoveShopsIdFromPosts < ActiveRecord::Migration[5.0]
  def change
      remove_reference :posts, :shops, foreign_key: true
  end
end
