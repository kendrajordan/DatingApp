using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class ExtendedUserEntity1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LatActive",
                table: "Users",
                newName: "LastActive");

            migrationBuilder.AddColumn<string>(
                name: "Introduction",
                table: "Users",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Introduction",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "LastActive",
                table: "Users",
                newName: "LatActive");
        }
    }
}
