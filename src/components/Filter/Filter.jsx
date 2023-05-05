import { Input, Title } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <div>
      <Title>Find contacts by name</Title>
      <label>
        <Input
          type="text"
          name="filter"
          required
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
}
