import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import Card from './Card';

const Column = ({ column, cards }) => {
    return (
        <div className="w-[320px] shrink-0 flex flex-col h-full max-h-full">
            {/* Column Header */}
            <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex items-center space-x-2">
                    <h2 className="font-bold text-slate-700 tracking-wide text-sm uppercase">
                        {column.title}
                    </h2>
                    <span className="bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full text-xs font-bold">
                        {cards.length}
                    </span>
                </div>
            </div>

            {/* Droppable Area */}
            <div className="flex-1 bg-slate-100/50 rounded-2xl border border-slate-200/60 p-3 overflow-y-auto custom-scrollbar">
                <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`min-h-[100px] transition-colors duration-200 rounded-xl ${snapshot.isDraggingOver ? 'bg-teal-50/50' : ''
                                }`}
                        >
                            {cards.map((card, index) => (
                                <Card key={card.id} card={card} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};

export default Column;
