USE IMS_DEV;


CREATE TABLE ApparatusType (
	ApparatusTypeID int NOT NULL IDENTITY(1,1) PRIMARY KEY ,
	ApparatusTypeName varchar(16) NOT NULL,
	Abbreviation varchar(8) NOT NULL
);

CREATE TABLE Counties(
	CountyID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	CountyName varchar(32) NOT NULL

);

CREATE TABLE Companies(
	CompanyID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	StationNumber int NOT NULL,
	CompanyName varchar(32),
	CountyID int NOT NULL FOREIGN KEY REFERENCES Counties(CountyID)
);

CREATE TABLE Apparatus(
	ApparatusID int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	ApparatusTypeID int NOT NULL FOREIGN KEY REFERENCES ApparatusType(ApparatusTypeID),
	CompanyID int NOT NULL FOREIGN KEY REFERENCES Companies(CompanyID)

);