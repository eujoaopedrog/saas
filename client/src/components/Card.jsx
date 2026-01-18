import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { MessageCircle, DollarSign } from 'lucide-react';

const Card = ({ card, index }) => {
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`
                        group relative p-4 mb-3 rounded-xl border border-slate-100 
                        bg-white shadow-sm hover:shadow-md transition-all duration-300
                        ${snapshot.isDragging
                            ? 'shadow-xl scale-105 rotate-2 z-50 ring-2 ring-teal-500/20'
                            : 'hover:-translate-y-1'
                        }
                    `}
                >
                    {/* Status Indicator Stripe */}
                    <div
                        className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all
                            ${card.status === 'green' ? 'bg-teal-400' :
                                card.status === 'yellow' ? 'bg-amber-400' : 'bg-rose-400'}
                        `}
                    />

                    <div className="pl-3">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-slate-800 text-sm leading-tight">
                                {card.name}
                            </h4>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-slate-400 hover:text-teal-600 p-1">
                                    <MessageCircle size={14} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs mt-3">
                            <div className="flex items-center text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
                                <DollarSign size={12} className="mr-1 text-teal-600" />
                                <span className="font-medium tracking-wide">
                                    {card.value > 0 ? card.value.toLocaleString('pt-BR') : 'A definir'}
                                </span>
                            </div>

                            {card.status === 'yellow' && (
                                <span className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 font-medium">
                                    Análise
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Card;
