class ChangePostsPostedToDate < ActiveRecord::Migration[5.0]
  def change
      rename_column :posts, :posted, :date
  end
end
