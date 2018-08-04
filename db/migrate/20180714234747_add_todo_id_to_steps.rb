class AddTodoIdToSteps < ActiveRecord::Migration[5.1]
  def change
    add_column :steps, :todo_id, :integer
  end
end
