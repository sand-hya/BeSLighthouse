import * as React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
// import { selectedFilterData } from "./mapFilterData";

const names = [
  "Foundation led projects (COM-F)",
  "Community led projects (COM-C)"
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export function OpenSourceProjectType({ filter, setFilter }: any) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange1 = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  if (personName?.[0] !== filter.COM) {
    filter.COM = personName?.[0];
    setFilter({ ...filter });
  }
  return (
    <div
      style={{
        width: "100%",
        backgroundColor:
          !personName?.[0] ||
          personName?.[0] === "Open Source Project Type (COM)"
            ? "white"
            : "lightgreen"
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <Select
          multiple={false}
          displayEmpty
          value={personName}
          onChange={handleChange1}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <>Open Source Project Type (COM)</>;
            }
            return selected.join(", ");
          }}
          style={{ height: "35px" }}
        >
          <MenuItem value="Open Source Project Type (COM)">
            <>All</>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
