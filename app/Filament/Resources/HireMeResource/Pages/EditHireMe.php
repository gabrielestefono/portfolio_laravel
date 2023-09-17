<?php

namespace App\Filament\Resources\HireMeResource\Pages;

use App\Filament\Resources\HireMeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHireMe extends EditRecord
{
    protected static string $resource = HireMeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
