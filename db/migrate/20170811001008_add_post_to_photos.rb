class AddPostToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_reference :photos, :post, foreign_key: true
  end
end
