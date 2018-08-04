class AddNotNullToTodoId < ActiveRecord::Migration[5.1]
  def change
    change_column :steps, :todo_id, :integer, default: false
  end
end
