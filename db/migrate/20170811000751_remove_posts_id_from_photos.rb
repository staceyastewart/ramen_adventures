class RemovePostsIdFromPhotos < ActiveRecord::Migration[5.0]
  def change
      remove_reference :photos, :posts, foreign_key: true
  end
end
