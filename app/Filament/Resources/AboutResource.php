<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AboutResource\Pages;
// use App\Filament\Resources\AboutResource\RelationManagers;
// use Filament\Forms;
use App\Models\About;
use Faker\Provider\ar_EG\Text;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Form;
use Filament\Resources\Resource;
// Tipo de Texto input
use Filament\Forms\Components\TextInput;
// Tipo de Texto area
use Filament\Forms\Components\Textarea;
// Tipo de Imagem
use Filament\Forms\Components\FileUpload;
// use Illuminate\Database\Eloquent\Builder;
// use Illuminate\Database\Eloquent\SoftDeletingScope;

class AboutResource extends Resource
{

    protected static ?string $model = About::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationLabel = 'Sobre';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')->name('Título'),
                TextInput::make('subtitle')->name('Subtítulo'),
                Textarea::make('description')->name('Descrição'),
                FileUpload::make('image')->directory('about')->image()->name('Imagem'),
                TextInput::make('image_alt')->name('Alt Imagem'),
                TextInput::make('experience')->name('Experiência'),
                TextInput::make('projects')->type('number')->name('Projetos'),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateActions([
                Tables\Actions\CreateAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAbouts::route('/'),
            'create' => Pages\CreateAbout::route('/create'),
            'edit' => Pages\EditAbout::route('/{record}/edit'),
        ];
    }
}
