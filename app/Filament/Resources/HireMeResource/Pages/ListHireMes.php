<?php

namespace App\Filament\Resources\HireMeResource\Pages;

use App\Filament\Resources\HireMeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHireMes extends ListRecords
{
    protected static string $resource = HireMeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
