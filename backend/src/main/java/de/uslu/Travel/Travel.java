package de.uslu.Travel;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@NoArgsConstructor
public class Travel {

    @Id
    private String id;
    private String city;
    private Date startDate;
    private Date endDate;
    private String notes;
    private String username;

}
