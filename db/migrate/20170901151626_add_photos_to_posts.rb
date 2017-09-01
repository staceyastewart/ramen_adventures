class AddPhotosToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :photos, :text, array: true, default: []
  end
end
