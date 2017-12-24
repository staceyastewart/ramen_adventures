class AddDefaultValueToBestOf < ActiveRecord::Migration[5.0]
  def up
  change_column :posts, :best_of, :boolean, default: false
end

def down
  change_column :posts, :best_of, :boolean, default: nil
end
end
