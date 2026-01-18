import React from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './Column';

const KanbanBoard = ({ data, onDragEnd }) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex h-full gap-6 pb-2">
                {data.columnOrder.map((columnId) => {
                    const column = data.columns[columnId];
                    // Filter logic is handled by parent, or we just map IDs.
                    // If we want filtering, we might need to look up cards from a passed 'filteredCards' map
                    // OR, simply, the parent passes a 'cards' prop to generic columns.
                    // But here we depend on data.cards[cardId].
                    // Let's assume 'data' passed here is already filtered OR we just render what we have.
                    // Ideally, for search, we filter the *list* of cards in the column.

                    const cards = column.cardIds
                        .map((cardId) => data.cards[cardId])
                        .filter(card => card !== undefined); // Safety check if filtering removed cards from dictionary

                    return <Column key={column.id} column={column} cards={cards} />;
                })}
            </div>
        </DragDropContext>
    );
};

export default KanbanBoard;
