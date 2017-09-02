class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :price
      t.string :content
      t.string :link

      t.timestamps
    end
  end
end
